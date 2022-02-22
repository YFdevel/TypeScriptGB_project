export class MyGraphicsPrimitive2D {
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }
    moveVertical(moving) {
        this.top = this.top + moving;
        this.bottom = this.bottom + moving;
        return this.top;
    }
    moveHorizontal(moving) {
        this.left = this.left + moving;
        this.right = this.right + moving;
        return this.left;
    }
}
export class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
}
export class MyCircle extends MyAreaPrimitive2D {
    constructor(radius, center) {
        super();
        this.radius = radius;
        this.center = {
            x: center.x,
            y: center.y
        };
    }
    square() {
        return Math.PI * (Math.pow(this.radius, 2));
    }
    moveVertical(moving) {
        this.center.y = this.center.y + moving;
        return this.center.y;
    }
    moveHorizontal(moving) {
        this.center.x = this.center.x + moving;
        return this.center.x;
    }
    paintCircle(top, left, radius) {
        return `<div class="circle-to-move" style="top:${top}px; left:${left}px; width:${radius * 2}px; height: ${radius * 2}px;"></div>`;
    }
}
export class MyRectangle extends MyAreaPrimitive2D {
    constructor(top, left, bottom, right) {
        super();
        this.left = left;
        this.top = top;
        this.bottom = bottom;
        this.right = right;
    }
    width() {
        return this.right - this.left;
    }
    height() {
        return this.bottom - this.top;
    }
    square() {
        return this.width() * this.height();
    }
    moveVertical(moving) {
        return super.moveVertical(moving);
    }
    moveHorizontal(moving) {
        return super.moveHorizontal(moving);
    }
    paintRectangle(top, left, widthElem, heightElem) {
        return `<div class="rectangle-to-move" style="top:${top}px; left:${left}px; width:${widthElem}px; height: ${heightElem}px;"></div>`;
    }
}
