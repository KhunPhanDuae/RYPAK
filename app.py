from flask import Flask, jsonify, request, send_from_directory
import json, os, re
# Stအတာႏ
app = Flask(__name__, static_folder="static")

# --- Load data once on start-up (swap with DB in prod) -----------------------
DATA_FILE = os.path.join(os.path.dirname(__file__), "data.json")
with open(DATA_FILE, "r", encoding="utf-8") as f:
    CITIZENS = json.load(f)

# --- Helper search -----------------------------------------------------------

def match_record(rec, query):
    q = query.lower()
    return q in rec["id"].lower() or q in rec["name"].lower()

# --- API Endpoints -----------------------------------------------------------

@app.route("/api/search")
def api_search():
    query = request.args.get("q", "").strip()
    if not query:
        return jsonify([])

    # simple linear search (replace with DB LIKE or full-text in prod)
    results = [rec for rec in CITIZENS if match_record(rec, query)]
    return jsonify(results)

# --- Serve the SPA -----------------------------------------------------------

@app.route("/")
@app.route("/<path:path>")
def static_proxy(path="index.html"):
    """Serve the front-end from /static folder"""
    return send_from_directory(app.static_folder, path)

# -----------------------------------------------------------------------------
if __name__ == "__main__":
    app.run(debug=True, port=5000)
