# Day 4: Individual Assertion Tests

Each file focuses on ONE assertion type with 3 test cases.

## 📁 File Structure

```
assertions/
├── 01_is-json.yaml           → Validates JSON format
├── 02_contains.yaml          → Case-sensitive exact matching
├── 03_icontains.yaml         → Case-insensitive matching
├── 04_equals.yaml            → Exact output matching
├── 05_regex.yaml             → Pattern matching
├── 06_starts-with.yaml       → Prefix validation
├── 07_contains-all.yaml      → All strings required
├── 08_contains-any.yaml      → At least one string required
├── 09_not-contains.yaml      → Negative testing
├── 10_latency.yaml           → Performance (speed)
└── 11_cost.yaml              → Performance (cost)
```

## 🎬 How to Use for Video

### Run Individual Tests:
```bash
# Test specific assertion
promptfoo eval -c assertions/01_is-json.yaml

# Test another one
promptfoo eval -c assertions/02_contains.yaml
```

### Run All Tests:
```bash
# Run all assertion tests
for file in assertions/*.yaml; do
  echo "Testing: $file"
  promptfoo eval -c "$file"
done
```

## 📚 Video Structure Recommendation

### Section 1: Basic String Matching (5 min)
1. `01_is-json.yaml` - Foundation
2. `02_contains.yaml` - Exact matching
3. `03_icontains.yaml` - Flexible matching

### Section 2: Advanced Matching (4 min)
4. `04_equals.yaml` - Complete match
5. `05_regex.yaml` - Patterns
6. `06_starts-with.yaml` - Format validation

### Section 3: Multiple String Checks (4 min)
7. `07_contains-all.yaml` - All required
8. `08_contains-any.yaml` - At least one
9. `09_not-contains.yaml` - Negative testing

### Section 4: Performance (3 min)
10. `10_latency.yaml` - Speed monitoring
11. `11_cost.yaml` - Budget control

## 💡 Teaching Tips

**For each assertion:**
1. Show the file name
2. Open official docs link (in comments)
3. Run the test: `promptfoo eval -c assertions/XX_name.yaml`
4. Explain what passed/failed
5. Show 1-2 test cases from the file

**Benefits of this structure:**
- ✅ Crystal clear which assertion you're demonstrating
- ✅ Easy to re-run specific tests during video
- ✅ Viewers can download and run individual files
- ✅ Each file is self-contained
- ✅ Numbers make the order obvious

## 🎯 Quick Reference

| Assertion | Use Case | Example |
|-----------|----------|---------|
| `is-json` | Validate JSON | Any structured output |
| `contains` | Exact text | Brand names, IDs |
| `icontains` | Flexible text | User input, general text |
| `equals` | Complete match | Fixed responses |
| `regex` | Patterns | Emails, phones, formats |
| `starts-with` | Prefix check | No LLM preamble |
| `contains-all` | Required fields | All must exist |
| `contains-any` | Optional fields | At least one |
| `not-contains` | Prevent text | No explanations |
| `latency` | Speed limits | < 5 seconds |
| `cost` | Budget limits | < $0.01 per call |
