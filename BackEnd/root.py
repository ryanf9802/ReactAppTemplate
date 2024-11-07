from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from util.config import config
import util.logging.Logger

import logging

logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[config["frontend_host"]],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root(request: Request):
    logger.info(f"{request.method} '{request.url.path}' FROM '{request.client.host}'")
    response = {"message": "Root Path"}
    logger.info(
        f"RESPONSE {request.method} '{request.url.path}' FROM '{request.client.host}': {response}"
    )
    return response


@app.get("/info/example1")
async def example1(request: Request):
    logger.info(f"{request.method} '{request.url.path}' FROM '{request.client.host}'")
    response = {"message": "Example Message 1!"}
    logger.info(
        f"RESPONSE {request.method} '{request.url.path}' FROM '{request.client.host}': {response}"
    )
    return response
