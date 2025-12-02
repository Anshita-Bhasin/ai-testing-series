# Hotel Info Extraction Prompt

Automate testing of AI prompts for extracting hotel information using **Promptfoo**.  
This repository demonstrates how to write, run, and assert AI prompt outputs with structured YAML configurations.

---

## Overview

This project extracts key details from hotel descriptions:  
- **Location/Area**  
- **Key amenities**  
- **Approximate price**  

The tests use **Groq Llama 3.1 8B Instant** as the AI provider.


## Getting Started

1. **Install Promptfoo**  
```
npm install -g promptfoo
```

2. **Run the Test**

Use the eval command to run your Promptfoo test config:
```
promptfoo eval hotel-info-extraction.yaml
```

This executes all prompts and assertions defined in your YAML file. You’ll see a summary in the terminal showing which assertions passed or failed.

3. **View Detailed Results**

After running the test, you can inspect the results in a more readable format with:
```
promptfoo view
```

Opens a web-based or CLI view (depending on your setup) of all test results.
Shows pass/fail for each assertion, inputs, and AI outputs.
Great for debugging and iterating on prompts.

💡 Tip:

Run promptfoo eval every time you change your prompt or test data.
Use promptfoo view to track trends and debug failures quickly
