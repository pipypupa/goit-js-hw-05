class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = this._value.concat(str);
  }

  prepend(str) {
    this._value = str.concat(this._value);
  }

  pad(str) {
    this._value = str.concat(this._value, str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

<script type="module"></script>
