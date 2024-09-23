#!/bin/bash

set -o errexit
set -o nounset

rm -f './celerybeat.pid'

exec watchfiles --filter python celery.__main__.main --args '-A config.celey_app beat -l INFO'