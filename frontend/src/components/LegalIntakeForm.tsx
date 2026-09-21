"use client";

import React, { useState, useCallback, useRef, useEffect, useMemo } from "react";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import FieldHelper from "./FieldHelper";
import { useLanguage } from "@/i18n/LanguageContext";
import { getLocalizedModules } from "../data/modulesLocalized";

interface LegalIntakeFormProps {
  onComplete: (data: Record<string, string | string[]>) => void;
}

const ActionCard = React.memo(
  ({
    optionLabel,
    optionDescription,
    optionValue,
    isSelected,
    type,
    name,
    onRadioChange,
    onCheckboxChange,
  }: {
    optionLabel: string;
    optionDescription: string;
    optionValue: string;
    isSelected: boolean;
    type: string;
    name: string;
    onRadioChange: (name: string, val: string) => void;
    onCheckboxChange: (name: string, val: string, checked: boolean) => void;
  }) => {
    return (
      <label
        className={`relative flex flex-col p-6 cursor-pointer transition-all border rounded-2xl overflow-hidden group ${
          isSelected
            ? "border-brand-500 bg-brand-50/50 dark:bg-brand-900/10 shadow-[0_4px_20px_-4px_rgba(var(--brand-500),0.1)]"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-brand-300 dark:hover:border-brand-700/50 hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-900"
        }`}
      >
        {/* Glow effect on selection */}
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent pointer-events-none" />
        )}

        <input
          type={type}
          name={name}
          value={optionValue}
          checked={isSelected}
          onChange={(e) => {
            if (type === "radio") {
              onRadioChange(name, optionValue);
            } else {
              onCheckboxChange(name, optionValue, e.target.checked);
            }
          }}
          className="sr-only"
        />

        <div className="flex items-start justify-between relative z-10">
          <div className="pr-8">
            <div
              className={`text-base font-bold mb-2 transition-colors ${
                isSelected
                  ? "text-brand-900 dark:text-brand-100"
                  : "text-slate-800 dark:text-slate-200 group-hover:text-brand-700 dark:group-hover:text-brand-300"
              }`}
            >
              {optionLabel}
            </div>
            <div
              className={`text-sm leading-relaxed transition-colors ${
                isSelected
                  ? "text-brand-700/80 dark:text-brand-300/80"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {optionDescription}
            </div>
          </div>

          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
              isSelected
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-slate-300 dark:border-slate-700 bg-transparent"
            } ${type === "radio" ? "rounded-full" : "rounded-md"}`}
          >
            {isSelected && <CheckCircle2 size={16} strokeWidth={3} className="text-white" />}
          </div>
        </div>
      </label>
    );
  },
);
ActionCard.displayName = "ActionCard";

export default function LegalIntakeForm({ onComplete }: LegalIntakeFormProps) {
  const { language, t } = useLanguage();
  const localizedModules = useMemo(() => getLocalizedModules(language), [language]);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const currentModule = localizedModules[currentStep] || localizedModules[0];
  const isLastStep = currentStep === localizedModules.length - 1;
  const progress = ((currentStep + 1) / localizedModules.length) * 100;

  const scrollToTop = useCallback(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      const scrollParent = topRef.current.closest(".overflow-y-auto");
      if (scrollParent) {
        scrollParent.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentStep, scrollToTop]);

  const handleRadioChange = useCallback((fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }, []);

  const handleCheckboxChange = useCallback(
    (fieldName: string, value: string, checked: boolean) => {
      setFormData((prev) => {
        const currentList = (prev[fieldName] as string[]) || [];
        if (checked) {
          return { ...prev, [fieldName]: [...currentList, value] };
        } else {
          return {
            ...prev,
            [fieldName]: currentList.filter((v: string) => v !== value),
          };
        }
      });
    },
    [],
  );

  const handleNext = () => {
    if (isLastStep) {
      setIsSubmitting(true);
      // Slight delay to show the nice submitting state before parent takes over
      setTimeout(() => {
        onComplete(formData);
      }, 600);
    } else {
      setCurrentStep((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
    scrollToTop();
  };

  return (
    <div ref={topRef} className="w-full flex flex-col min-h-[calc(100vh-120px)] animate-in fade-in duration-700">
      {/* Progress Header */}
      <div className="mb-10 lg:mb-16">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center shadow-md">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-bold text-sm tracking-widest uppercase text-slate-500 dark:text-slate-400">
              {t.assessment.step} {currentModule.id} / {localizedModules.length}
            </span>
          </div>
          <span className="font-bold text-brand-600 dark:text-brand-400 text-sm">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Module Content */}
      <div className="flex-1" key={`step-${currentStep}`}>
        <div className="mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            {currentModule.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            {currentModule.description}
          </p>
        </div>

        <div className="space-y-12 pb-24">
          {currentModule.fields.map((field, fieldIdx) => (
            <div
              key={field.name}
              className="animate-in slide-in-from-bottom-8 fade-in duration-700 fill-mode-both"
              style={{ animationDelay: `${fieldIdx * 150}ms` }}
            >
              <label className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center tracking-tight">
                {field.label}
                <FieldHelper title={field.label} />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-6">
                {field.options.map((optionObj) => {
                  const isSelected =
                    field.type === "radio"
                      ? formData[field.name] === optionObj.value
                      : (formData[field.name] || []).includes(optionObj.value);

                  return (
                    <ActionCard
                      key={optionObj.value}
                      optionLabel={optionObj.label}
                      optionDescription={optionObj.description}
                      optionValue={optionObj.value}
                      isSelected={isSelected}
                      type={field.type}
                      name={field.name}
                      onRadioChange={handleRadioChange}
                      onCheckboxChange={handleCheckboxChange}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Navigation */}
      <div className="flex items-center justify-end gap-6 pt-8 pb-12 mt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={handleBack}
          disabled={currentStep === 0 || isSubmitting}
          className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 transition-all uppercase tracking-wider"
        >
          <ArrowLeft size={18} strokeWidth={2.5} /> {t.assessment.back}
        </button>

        <button
          onClick={handleNext}
          disabled={isSubmitting}
          className="flex items-center gap-3 px-10 py-4 rounded-full text-sm font-extrabold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all uppercase tracking-wider disabled:opacity-70 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>{t.common.loading}</>
          ) : isLastStep ? (
            <>
              {t.assessment.generateReport} <CheckCircle2 size={20} strokeWidth={3} />
            </>
          ) : (
            <>
              {t.assessment.continue} <ChevronRight size={20} strokeWidth={3} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
