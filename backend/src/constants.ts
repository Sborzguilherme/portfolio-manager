enum HTTTP_ERROR {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export const DATE_FORMAT = {
  STRING_INPUT_FORMAT: 'YYYY-MM-DD',
  DISPLAY_FORMAT: 'DD/MM/YYYY',
};

export const HTTP_ERRORS: Record<HTTTP_ERROR, { status: number; message: string }> = {
  VALIDATION_ERROR: { status: 400, message: 'Validation Error' },
  NOT_FOUND: { status: 404, message: 'Not Found' },
  INTERNAL_SERVER_ERROR: { status: 500, message: 'Internal Server Error' },
};
