export const Alert = ({ message, type }) => (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all transform duration-500 ${
      type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
    } text-white flex items-center gap-2`}>
      {type === 'success' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      {message}
    </div>
  );