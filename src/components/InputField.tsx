interface InputFieldProps {
  label: string;
  error?: string | null;
  type: string;
  [key: string]: any;
}

export const InputField = ({ label, error, ...props }: InputFieldProps) => (
  <div className="flex flex-col mt-1 text-xs leading-5">
    <label className="block text-gray-500 mb-1 text-xl">{label}</label>
    {props.type === 'textarea' ? (
      <textarea
        className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
        rows={4}
        {...props}
      />
    ) : (
      <input
        className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
        {...props}
      />
    )}
    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
  </div>
); 