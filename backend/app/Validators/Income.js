'use strict'

class Income {
  get rules () {
    return {
      income_category_id: 'required|integer',
      name: 'required|max:255|min:3',
      value: 'required|number',
      operation_date: 'required|date'
    }
  }
}

module.exports = Income
