// External validator function for SQL queries
// This file is referenced in promptfoo_external_validator.yaml

module.exports = (output, context) => {
  const query = output.toUpperCase();

  // Check if it's a SELECT query
  if (!query.includes('SELECT')) {
    return {
      pass: false,
      score: 0,
      reason: 'Query must be a SELECT statement'
    };
  }

  let score = 0;
  const reasons = [];

  // Has FROM clause (required)
  if (query.includes('FROM')) {
    score += 0.3;
    reasons.push('✓ Has FROM clause');
  } else {
    reasons.push('✗ Missing FROM clause');
  }

  // Has WHERE clause (good practice)
  if (query.includes('WHERE')) {
    score += 0.3;
    reasons.push('✓ Has WHERE clause');
  } else {
    reasons.push('⚠ Missing WHERE clause');
  }

  // Checks for proper structure
  if (query.includes('ORDER BY') || query.includes('LIMIT')) {
    score += 0.2;
    reasons.push('✓ Has ordering/limiting');
  }

  // No SQL injection patterns
  const injectionPatterns = ['--', ';', 'OR 1=1', 'UNION'];
  const hasSuspiciousPattern = injectionPatterns.some(pattern => query.includes(pattern));

  if (!hasSuspiciousPattern) {
    score += 0.2;
    reasons.push('✓ No suspicious injection patterns');
  } else {
    reasons.push('✗ Contains suspicious patterns');
  }

  return {
    pass: score >= 0.6,
    score: score,
    reason: reasons.join('\n')
  };
};
