export enum RETAIL_ORDER_STATUS {
  PREPARING = 3, // Đang chuẩn bị hàng
  READY_FOR_INTERNATIONAL_SHIPPING = 4, // Đã chuẩn bị hàng xong và bàn giao cho đơn vị vận chuyển quốc tế
  RECEIVED_BY_INTERNATIONAL_CARRIER = 5, // Đơn vị vận chuyển quốc tế đã nhận
  INTERNATIONAL_TRANSIT = 6, // Đang vận chuyển quốc tế
  ARRIVED_AT_LOCAL_HUB = 7, // Đã nhận hàng tại nội địa
  OUT_FOR_DELIVERY = 8, // Đang giao
  DELIVERED = 9, // Đã giao
  COMPLETED = 10, // Hoàn tất
  CANCELLED = 11, // Đã hủy
  READY_FOR_DELIVERY = 12, //
  DELIVERING = 13,
}
