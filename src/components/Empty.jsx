export function Empty({ title, info, callToAction }) {
  return (
    <div className="text-center">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400">
        <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
      {info && <p className="mt-1 text-sm text-gray-500">{info}</p>}

      {callToAction && <div className="mt-6">{callToAction}</div>}
    </div>
  );
}
