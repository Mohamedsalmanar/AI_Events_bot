# AI Event Finder + Auto Registration

A tiny hackathon MVP: Next.js frontend, FastAPI backend, CrewAI-flavored agents, Playwright automation, and in-memory state only.

## Setup

1. Copy environment values:

```bash
copy .env.example .env
```

2. Install frontend dependencies:

```bash
npm install
```

3. Install backend dependencies:

```bash
cd backend
pip install -r requirements.txt
playwright install chromium
```

## Run

Start the backend:

```bash
cd backend
uvicorn main:app --reload
```

On Windows, if `uvicorn` is not on PATH after `pip install`, run:

```bash
python -m uvicorn main:app --reload
```

Start the frontend from the project root:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Demo Flow

1. Enter name and email.
2. Adjust filters for date and location.
3. Click **Discover Events**.
4. Pick an event and click **Register**.
5. Watch the live-style progress log update in the UI.

## Notes

- No database, authentication, Docker, Redis, or Prisma.
- Event discovery uses simple scrapers plus strong demo fallback events, so the app still works when target sites block scraping.
- Registration supports basic forms with common field names. By default it runs in safe demo mode and does not submit forms unless `AUTO_SUBMIT=true`.
