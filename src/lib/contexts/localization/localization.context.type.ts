export type LocalizationContextType = {
  t: (scope: string, options?: {locale: string; options: object}) => string;
};
