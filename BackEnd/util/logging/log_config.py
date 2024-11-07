import logging
from datetime import datetime

LOGGING_LEVEL = logging.DEBUG

IGNORE_LOGGERS = ["watchfiles"]

LOG_OUTPUT_DIR = "./logs"

LOG_FILE_NAME = f"{datetime.now().strftime('%Y-%m-%d_%H-%M-%S')}.log"

LOG_FORMATTER = logging.Formatter(
    "%(name)s | %(levelname)s | %(asctime)s | %(message)s", "%Y-%m-%d %H:%M:%S UTC%z"
)
