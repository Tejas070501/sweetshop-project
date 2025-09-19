## My AI Usage

- *Tools Used:* Perplexity AI, Gemini AI, ChatGPT
- *How I used them:*
  - Perplexity AI: For debugging, code explanations, generating code snippets, fixing git issues, planning project steps, and refining documentation.
  - Gemini AI: For brainstorming API endpoint structure, resolving frontend-backend integration problems, and code generation for React and Django.
  - ChatGPT: For boilerplate code, testing strategies, React component samples, and error solutions.
- *Reflection:* Using multiple AI tools significantly improved my speed of development and my ability to resolve blockers quickly. Each tool provided unique support—Perplexity for troubleshooting, Gemini for brainstorming and planning, and ChatGPT for code scaffolding and testing ideas. The process was much faster and less stressful with AI augmenting my workflow, though every answer and code suggestion still required careful review and adaptation to my project’s context.

## Test Report

### Backend (Django)
- Ran python manage.py test in sweetshop-backend:
    - All core model and API endpoint tests *passed* (see output below).
    - No errors or failures reported.
- Manual Tests:
    - Successfully registered/login a user.
    - Purchase endpoint works and updates stock as expected.

### Frontend (React)

- The frontend has minimal custom features at this stage.
- Ran npm test to ensure that the default React test suite passes (App renders without crashing).
- Manual Test:
    - App loads successfully in the browser.
    - Product list is displayed when the backend is running.
    - Purchase button is visible and disables correctly based on stock quantity.

*Summary:*  
Basic smoke tests for loading and interaction have passed. Full test coverage will be added as the frontend is enhanced.
