class Power {
  // P= 1/2*q*A*(v^3)*cp
  // q = air density q = K**Pascal(101300)*Rspecific(287)
  // A = pr^2
  // v = wind speed
  // cp = efficient machine
  piNumber = 3.14159265359;
  rspecific = 287;

  getDensity(c, pa) {
    const density = ((c + 273) / (pa * 100)) * this.rspecific;
    return density;
  }
  getArea(r) {
    const radius = this.piNumber * r * r;
    return radius;
  }

  getPower(c, pa, r, v, cp) {
    const q = 0.5 * this.getDensity(c, pa);
    const A = this.getArea(r);
    const power = 0.5 * q * A * v ** 3 * cp;
    return power;
  }
}
export default new Power();
