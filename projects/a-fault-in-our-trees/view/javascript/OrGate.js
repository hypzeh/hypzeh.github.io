var OrGate = (function (_super) {
	__extends(OrGate, _super);
    function OrGate(pPosition) {
		_super.call(this);
    }
	
	OrGate.prototype.draw = function (context) {
		context.save();
		context.beginPath();
        context.moveTo(95, 70);
        context.bezierCurveTo(30, 30, -30, 30, -95, 70);
        context.bezierCurveTo(-90, -30, -80, -50, 0, -85);
        context.bezierCurveTo(80, -50, 90, -30, 95, 70);
        context.closePath();
        
        
        context.fillStyle = 'white';
        context.fill();
        
        
        context.lineWidth = 3;
        context.stroke();
        context.restore();
        
        context.save();
        context.moveTo(0, -85);
        context.lineTo(0, -100);
        context.moveTo(0, 39);
        context.lineTo(0, 100);
        context.lineWidth = 3;
        context.stroke();
        context.restore();
        
		this.drawChildren(context);
    };
	
    return OrGate;
})(FaultTreeGate);
