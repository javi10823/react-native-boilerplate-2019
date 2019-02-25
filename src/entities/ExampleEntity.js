class ExampleEntity {
  constructor(
    field
  ) {
    this.field
  }

  static fromJSON(properties) {
    return new Cocktail(
      properties.field_api,
    );
  }
}

export default Cocktail;
