FROM jupyter/datascience-notebook:python-3.7.6
USER root
EXPOSE 8888

RUN mkdir /notebooks
WORKDIR /notebooks
COPY . /notebooks

RUN pip install llvmlite==0.36.0 --ignore-installed
RUN pip install -r ./requirements.txt

CMD ["jupyter", "notebook", "--allow-root"]
