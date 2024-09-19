import subprocess
import sys

def run_command(command):
    """Executes a shell command and handles errors."""
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error while executing the command: {command}\n{e}")
        sys.exit(1)

def build():
    run_command("docker compose -f local.yml up --build -d --remove-orphans")

def up():
    run_command("docker compose -f local.yml up -d")

def down():
    run_command("docker compose -f local.yml down")

def down_v():
    run_command("docker compose -f local.yml down -v")

def show_logs():
    run_command("docker compose -f local.yml logs")

def show_logs_api():
    run_command("docker compose -f local.yml logs api")

def makemigrations():
    run_command("docker compose -f local.yml run --rm api python manage.py makemigrations")

def migrate():
    run_command("docker compose -f local.yml run --rm api python manage.py migrate")

def collectstatic():
    run_command("docker compose -f local.yml run --rm api python manage.py collectstatic --no-input --clear")

def superuser():
    run_command("docker compose -f local.yml run --rm api python manage.py createsuperuser")

def db_volume():
    run_command("docker volume inspect api_estate_prod_postgres_data")

def mailpit_volume():
    run_command("docker volume inspect api_estate_prod_mailpit_data")

def estate_db():
    run_command("docker compose -f local.yml exec postgres psql --username=yvesengoulou --dbname=Estate_db")

def main():
    if len(sys.argv) < 2:
        print("Bitte einen Befehl angeben.")
        sys.exit(1)

    command = sys.argv[1]

    commands = {
        "build": build,
        "up": up,
        "down": down,
        "down-v": down_v,
        "show-logs": show_logs,
        "show-logs-api": show_logs_api,
        "makemigrations": makemigrations,
        "migrate": migrate,
        "collectstatic": collectstatic,
        "superuser": superuser,
        "db-volume": db_volume,
        "mailpit-volume": mailpit_volume,
        "estate-db": estate_db,
    }

    if command in commands:
        commands[command]()
    else:
        print(f"Unkmown command: {command}")
        sys.exit(1)

if __name__ == "__main__":
    main()
