FROM python:3.7

COPY requirements.txt /root/requirements.txt
RUN pip install --no-cache-dir -r /root/requirements.txt

ADD --chown=daemon:daemon . /srv/brandslist
WORKDIR /srv/brandslist

ENTRYPOINT uwsgi /srv/brandslist/conf/uwsgi.ini
EXPOSE 9000