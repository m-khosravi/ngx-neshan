/**
 *حاوی مختصات روی نقشه
 *
 * @export
 * @class NsLocation
 */
export class NsLocation {
  /**
   *
   */
  constructor(latitude: number = 35.698209, longitude: number = 51.333181) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
  /**
   *عرض جغرافیایی (latitude)
   *
   * @type {number}
   * @memberof NsLocation
   */
  latitude: number;

  /**
   *طول جغرافیایی (longitude)
   *
   * @type {number}
   * @memberof NsLocation
   */
  longitude: number;

  toString() {
    return `${this.latitude},${this.longitude}`;
  }
}

export class NsXYLocation {
  /**
  *طول جغرافیایی (longitude)
  *
  * @type {number}
  * @memberof NsXYLocation
  */
  x: number;
  /**
   *عرض جغرافیایی (latitude)
   *
   * @type {number}
   * @memberof NsXYLocation
   */
  y: number;

  z: number;
}
