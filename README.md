# Personal Portfolio Website

A modern, animated, and modular personal website built with Flask (backend) and HTML/CSS/JS (frontend).

## Features
- Fixed header with 3D logo and navigation bar
- Home page with animated greeting, dynamic word, and Twitter-like card
- Downloadable CV
- About Me section with animated info cards (Education, Experience, Skills, Languages)
- Project section with animated project cards
- Contact section with contact info
- Responsive and beautiful design

## Project Structure
```
backend/
  app.py           # Flask backend
  config.py        # Secret keys and SMTP config (excluded from git)
frontend/
  static/
    css/           # CSS styles
    images/        # Images and CV PDF
    js/            # JavaScript for dynamic/animated UI
  templates/       # HTML templates (Jinja2)
requirements.txt   # Python dependencies
.gitignore         # Files/folders to exclude from git
```

## Setup & Run
1. **Clone the repository**
2. **Install dependencies**
   ```
   pip install -r requirements.txt
   ```
3. **Configure secrets**
   - Edit `backend/config.py` with your own `SECRET_KEY` (and SMTP credentials if needed)
4. **Run the Flask app**
   ```
   python backend/app.py
   ```
5. **Open your browser** and go to [http://localhost:5000](http://localhost:5000)

## Customization
- Update your info, projects, and contact details in the HTML templates in `frontend/templates/`
- Add images and your CV to `frontend/static/images/`
- Adjust styles in `frontend/static/css/style.css`

## Security
- `config.py` is excluded from git for your secrets and credentials.
- Never commit real passwords or secret keys to version control.

## License
MIT License
