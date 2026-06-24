#!/usr/bin/env python3
"""Tiny no-cache static dev server for the NAGU site.

Serves the folder this script lives in, sending no-store on every response so
a normal reload always serves the latest files during development. For local
development only — do not deploy this; any static host serves the built files.

Usage: python3 serve.py [port]   (default 3000)
"""
import os
import sys
import functools
import http.server
import socketserver

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


Handler = functools.partial(NoCacheHandler, directory=DIRECTORY)
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"NAGU dev server (no-cache) on http://localhost:{PORT} serving {DIRECTORY}")
    httpd.serve_forever()
