"use client";

import React from 'react'

function ErrorBoundry({ error, reset, }: {
    error: Error;
    reset: () => void;
}) {
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default ErrorBoundry