export enum FOOD_STATUS {
  PENDING = 3,
  ACCEPTED, // 4
  PREPARING, // 5
  OUT_FOR_DELIVERY, // 6 - Delivery only
  DELIVERING, // 7 - Delivery only
  DELIVERED, // 8 - Delivery only
  READY_FOR_PICKUP, // 9 - Pickup only
  PICKED_UP, // 10 - Pickup only
  SERVED, // 11 - Dine-in only
  COMPLETED, // 12
  CANCELLED, // 13
}

export enum FOOD_ORDER_TYPE {
  DELIVERY = 'DELIVERY',
  PICK_UP = 'PICK_UP',
  DINE_IN = 'DINE_IN',
}
