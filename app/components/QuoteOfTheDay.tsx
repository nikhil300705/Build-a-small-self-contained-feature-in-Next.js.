// app/components/QuoteOfTheDay.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { quotes } from '.. quotes/data/quotes';

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div style={{ fontStyle: 'italic', marginTop: '1rem', fontSize: '1.2rem' }}>
      "{quote}"
    </div>
  );
}
