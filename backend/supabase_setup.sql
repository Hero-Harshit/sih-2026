-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store your documents
create table if not exists document_chunks (
    id bigserial primary key,
    content text not null, -- The actual chunk of text
    metadata jsonb, -- Stores filename, page_number, category, etc.
    embedding vector(768) -- Google Gemini text-embedding-004 produces 768-dimensional vectors
);

-- Create a function to similarity search for documents
create or replace function match_document_chunks (
    query_embedding vector(768),
    match_count int default null,
    filter jsonb default '{}'
) returns table (
    id bigint,
    content text,
    metadata jsonb,
    similarity float
)
language sql
as $$
    select
        document_chunks.id,
        document_chunks.content,
        document_chunks.metadata,
        1 - (document_chunks.embedding <=> query_embedding) as similarity
    from document_chunks
    where document_chunks.metadata @> filter
    order by document_chunks.embedding <=> query_embedding
    limit match_count;
$$;
