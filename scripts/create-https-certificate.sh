#!/bin/bash
#
# Create a HTTPS certificate, and update environment for local development.

SCRIPT_DIR=`dirname $0`
PASSWORD="!Pa55word"
OTHER_ARGUMENTS=()

set_password() {
  if [[ "$1" == "" ]]; then
    echo "No password specified, proceeding with default."
    return
  fi

  PASSWORD="$1"
}

create_certificate() {
  dotnet dev-certs https -ep "${USERPROFILE}\.aspnet\https\smiosoft.development.pfx" -p $PASSWORD --trust
}

update_environment() {
	cd $SCRIPT_DIR
	grep -qxF "PFX_CERTIFICATE_PASSWORD=${PASSWORD}" "..\src\Hypzeh.Web\.env" || echo "PFX_CERTIFICATE_PASSWORD=${PASSWORD}" >> "..\src\Hypzeh.Web\.env"
}

for arg in "$@"
do
  case $arg in
    -p|--password)
      set_password $2
      shift
    ;;
    *)
      OTHER_ARGUMENTS+=("$1")
      shift
    ;;
  esac
done

create_certificate
update_environment
