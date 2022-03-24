class FnIf {

  constructor() {
    this.lastSyntax = "if"
    this.lastCondition = void 0;
    this.didEnd = false;
    this.rules = [];
  }

  if( condition ) {
    this.rules.push({
      type: "if",
      condition: condition,
      result: void 0,
    })
    return this;
  }

  elseif( condition ) {
    this.rules.push({
      type: "elseif",
      condition: condition,
      result: void 0,
    })
    return this;
  }

  else( condition ) {
    this.rules.push({
      type: "else",
      condition: condition,
      result: void 0,
    })
    return this;
  }

  then( result ) {
    this.rules[this.rules.length - 1].result = result;
    return this;
  }

  end() {
    for( let rule of this.rules ) {
      switch( rule.type ) {
        case "if":
          if( rule.condition ) return rule.result;
          continue;
        case "elseif":
          if( rule.condition ) return rule.result;
          continue;
        case "else":
          return rule.result;
      }
    }
    return void 0;
  }

}


const _if = condition => {
  const fnif = new FnIf()
  return fnif.if( condition );
}
module.exports = { FnIf, _if }
