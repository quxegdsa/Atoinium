from setuptools import setup, find_packages

setup(
    name='thera',
    version='0.1',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'numpy',
        'pandas',
        'scipy',
        'djangorestframework',
        'scikit-learn',
        'matplotlib',
        'seaborn',
        'jupyter',
        'djangorestframework-simplejwt',
        'django-filter',
        'psycopg2-binary',
        'gunicorn',
        'qiskit',
        'biopython',
        'scikit-bio',
        'qutip',
        'pennylane',
        'django-cors-headers',
        'Django>=3.2,<4.0',
        'djangorestframework',
        'channels',
        'celery',
        'django-celery-beat',
        'django-celery-results',
        'django-allauth',
        'django-debug-toolbar',
        'django-extensions',
        'django-filter',
        'django-cacheops',
        'django-guardian',
        'django-two-factor-auth',
        'pytest-django',
        'factory_boy',
        'coverage',
        'django-storages',
        'django-environ',
        'gunicorn',
    ],
    entry_points={
        'console_scripts': [
            'manage.py = manage:main',
        ],
    },
    classifiers=[
        'Programming Language :: Python :: 3',
        'Framework :: Django',
        'Operating System :: OS Independent',
    ],
)