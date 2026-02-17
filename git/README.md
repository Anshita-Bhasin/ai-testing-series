# Day 4: Custom Assertions & JavaScript Validators

This section covers advanced validation techniques using custom JavaScript and Python functions in Promptfoo.

## Overview

While built-in assertions like `contains`, `regex`, and `is-json` are useful, custom validators allow you to:
- Implement complex business logic validation
- Score outputs on a scale (0-1) for partial credit
- Validate JSON structure and specific field values
- Check multiple conditions in a single assertion
- Reuse validation logic across multiple tests

## Files

### 1. `promptfooconfig.yaml`
**Use Case**: Product information extraction with JSON validation

**Custom Validators**:
- **Price range validation**: Ensures extracted price is within reasonable bounds
- **Required fields check**: Validates all mandatory JSON fields are present
- **Scoring function**: Assigns partial credit based on accuracy of extraction

**Key Concepts**:
```javascript
// Return boolean for pass/fail
return product.price > 0 && product.price < 2000;

// Return object with score for partial credit
return { pass: score >= 0.8, score: score };
```

### 2. `promptfoo_python_validator.yaml`
**Use Case**: Email response quality validation

**Custom Validators**:
- **Word count limits**: Ensures response is neither too short nor too long
- **Tone checking**: Validates professional language usage
- **Quality scoring**: Multi-criteria evaluation with weighted scoring

**Key Concepts**:
```python
# Simple boolean return
return 50 <= output_words <= 200

# Detailed scoring with reason
return {
    'pass': score >= 0.7,
    'score': score,
    'reason': f'Email quality score: {score}'
}
```

### 3. `promptfoo_external_validator.yaml` + `validators/sql_validator.js`
**Use Case**: SQL query security and structure validation

**Features**:
- External JavaScript file for reusable validation logic
- Security checks for dangerous SQL operations
- Structured scoring with detailed feedback
- Multiple validation criteria combined

**External Validator Structure**:
```javascript
module.exports = (output, context) => {
  return {
    pass: true/false,
    score: 0.0-1.0,
    reason: 'Detailed feedback'
  };
};
```

## Custom Assertion Types

### 1. JavaScript Assertions (inline)
```yaml
assert:
  - type: javascript
    value: |
      const data = JSON.parse(output);
      return data.price < 1000;
```

### 2. Python Assertions (inline)
```yaml
assert:
  - type: python
    value: |
      words = len(output.split())
      return 50 <= words <= 200
```

### 3. External File Validators
```yaml
assert:
  - type: javascript
    value: file://validators/custom_validator.js
```

### 4. Scored Assertions (partial credit)
```yaml
assert:
  - type: javascript
    threshold: 0.7  # Minimum score to pass
    value: |
      let score = 0;
      // Calculate score based on criteria
      return { pass: score >= 0.7, score: score };
```

## Running the Examples

### Test product extraction:
```bash
cd Day4
promptfoo eval -c promptfooconfig.yaml
```

### Test email quality validation:
```bash
promptfoo eval -c promptfoo_python_validator.yaml
```

### Test SQL query validation:
```bash
promptfoo eval -c promptfoo_external_validator.yaml
```

### View results:
```bash
promptfoo view
```

## Validator Return Types

### Boolean Return
```javascript
return true;  // Pass
return false; // Fail
```

### Object Return (with scoring)
```javascript
return {
  pass: true,           // Required: boolean
  score: 0.85,          // Optional: 0-1 scale
  reason: 'Details'     // Optional: explanation
};
```

## Best Practices

1. **Start Simple**: Use built-in assertions when possible, custom validators for complex logic
2. **Provide Reasons**: Include detailed feedback in validator responses
3. **Use Scoring**: Implement partial credit for nuanced evaluation
4. **External Files**: Move complex validators to separate files for reusability
5. **Security First**: Always validate for security issues (SQL injection, XSS, etc.)
6. **Multiple Criteria**: Break complex validation into multiple small assertions

## Common Use Cases

- **JSON Structure Validation**: Check schema compliance beyond basic `is-json`
- **Business Rules**: Validate domain-specific constraints (price ranges, dates)
- **Quality Scoring**: Rate outputs on multiple dimensions
- **Security Checks**: Detect injection attempts, dangerous patterns
- **Format Compliance**: Word counts, character limits, structure requirements
- **Multi-step Validation**: Chain multiple checks with early exit

## Advanced Features

### Context Access
```javascript
module.exports = (output, context) => {
  // context.vars contains test variables
  // context.prompt contains the prompt
  const expectedPrice = context.vars.expected_price;
  return parseFloat(output) <= expectedPrice;
};
```

### Thresholds
```yaml
assert:
  - type: javascript
    threshold: 0.8  # Require 80% score to pass
    value: |
      // Return score between 0-1
```

## Next Steps

After mastering custom validators, consider:
- **Day 5**: Model-graded evaluations (using LLMs to judge outputs)
- **Day 6**: Red teaming and adversarial testing
- **Day 7**: Performance benchmarking and optimization
