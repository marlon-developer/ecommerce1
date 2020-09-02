'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async (model) => {
  model.$sideLoaded.subtotal = await model.items().getSum('subtotal')
  model.$sideLoaded.qty_items = await model.items().getSum('qty_items')
  model.$sideLoaded.discount = await model.items().getSum('discount')
  model.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount
}

OrderHook.updateCollectionValues = async models => {
  for (let model of models) {
    model = await OrderHook.updateValues(model)
  }
}
