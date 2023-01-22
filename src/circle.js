export class Circle {
    // Nested
    static CircleType = Object.freeze({
        normal: "normal",
        dot: "dot"
    });

    // Props
    mouseX = screen.width / 2
    mouseY = screen.height / 2
    x = 0
    y = 0
    size = 40
    circleType = Circle.CircleType.normal

    // Methods
    updatePositionForEvent(pageX, pageY) {
        this.mouseX = pageX
        this.mouseY = pageY
    }

    updatePositionForInterval() {
        this.x += (this.mouseX - this.x) / 3;
        this.y += (this.mouseY - this.y) / 3;
    }

    setType(type, circle) {
        if (this.circleType === type) {
            return
        }
        this.circleType = type
        switch (this.circleType) {
            case Circle.CircleType.normal:
                this.size = 40
                circle.style.background = 'none'
                break
            case Circle.CircleType.dot:
                this.size = 12
                circle.style.background = '#A4A4A4'
                break
        }
        circle.style.width = `${this.size}px`
        circle.style.height = `${this.size}px`
    }
}