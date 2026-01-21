# AI Testing Series

A hands-on learning series exploring AI prompt testing using Promptfoo. This repository contains practical examples and exercises demonstrating different testing approaches for LLM applications.

## Overview

This repository documents a progressive learning journey through AI testing concepts, organized by day with increasing complexity.

## Structure

### Day 1: Basic Prompt Testing
Introduction to Promptfoo with a simple hotel information extraction prompt.

- **promptfooconfig.yaml**: Basic single test case with assertions
- **promptfooconfig_4models.yaml**: Comparing multiple LLM models
- **promptfooconfig_negativecase.yaml**: Testing edge cases and negative scenarios

**Key Concepts**: Basic assertions (`contains`, `icontains`), single provider testing, model comparison

### Day 2: Dynamic Testing & Table-Driven Tests
Scaling tests with multiple inputs and shared assertions.

- **promptfoo_tabletests.yaml**: Table-driven tests with dynamic hotel descriptions
- **promptfoo_multipletest.yaml**: Multiple test scenarios with regex and containsAny assertions

**Key Concepts**: Dynamic variables, regex matching, reusable assertions across test cases

### Day 3: Data-Driven Testing
External data integration for comprehensive test coverage.

- **promptfooconfig.yaml**: Sentiment analysis prompt with CSV data source
- **sentiment-tests.csv**: External test data with customer feedback scenarios

**Key Concepts**: CSV-based testing, sentiment classification, context-aware prompts

## Getting Started

### Prerequisites

```bash
npm install -g promptfoo
```

### Running Tests

Navigate to any day folder and run:

```bash
promptfoo eval -c promptfooconfig.yaml
```

To view results in the browser:

```bash
promptfoo view
```

## Provider Configuration

The examples use Groq's `llama-3.1-8b-instant` model. Ensure you have:

- Groq API key configured in your environment
- Or modify the provider in the config files to use your preferred LLM

## Learning Path

1. Start with Day1 to understand basic assertions and testing structure
2. Progress to Day2 to learn about scaling tests with dynamic inputs
3. Explore Day3 for data-driven testing with external sources

## Use Cases Covered

- Information extraction from text
- Multi-model comparison
- Sentiment analysis and classification
- Structured output validation
- Edge case testing

## License

This is a learning project and repository for educational purposes.
