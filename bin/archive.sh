#!/usr/bin/env bash
#
# Archive / crawl / mirror / recursively-download the XXX web-site (Bash script).
#
# NDF / 30-July-2019, 28-June-2019, 12:03 / 09-Sep-2019.
#
# See: https://github.com/nfreear/evolutionmegalab-org-archive
# See: https://github.com/IET-OU/cloudengine/blob/master/archive/cloudworks-archive.sh
# See: https://gist.github.com/steveosoule/79d0ba5f2cad558642aace43c7126946
# See: https://gnu.org/software/wget/manual/

# du -ach web.archive.org

# https://stackoverflow.com/questions/59895/get-the-source-directory-of-a-bash-script-from-within-the-script-itself
BIN_DIR="$( pwd )/$( dirname "$0" )"
# DIR="`pwd`/`dirname "$0"`"
BIN_DIR_2="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

URL_LIST_FILE=url-list.txt  # "url-list.txt" OR "url-list-2.txt"
FLAG_RECURSIVE=               # "" or "--recursive"

echo "Input directory:  ${BIN_DIR}"

# exit 1;

wget \
  --quota=15M \
  --level=1 \
  ${FLAG_RECURSIVE} \
  \
  --execute robots=off \
  --user-agent="wget/ou-iet-archiver (https://iet.open.ac.uk)" \
  --timestamping \
  --no-clobber \
  --page-requisites \
  --html-extension \
  --convert-links \
  --restrict-file-names=windows \
  --reject-regex '(cloudworks|xxx)' \
  --domains evidence.laceproject.eu \
  --output-file=evidence.laceproject.eu-wget-2019-11-05.log \
  --progress=dot \
  --show-progress \
  --directory-prefix=. \
  --input-file="${BIN_DIR}/${URL_LIST_FILE}"

#  	--recursive \
# 	--wait=1 \
# 	--random-wait \
#  	--mirror \  # shortcut for -N -r -l inf --no-remove-listing.
#  	--timestamping \
#   --no-clobber \
#	 --debug \
#  --directory-prefix=sample \

# tail ~/Downloads/cloudworks--28-jun-2019/cloudworks.ac.uk-wget-2019-06-28--p2.log

# End.
