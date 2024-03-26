from stix2validator import validate_file, validate_string, print_results

# Validator for STIX bundles
# Reference: https://stix2-validator.readthedocs.io/en/latest/usage.html
def validator(path: str, schema: str):
    results = validate_file(path)
    print_results(results)