var AndGate = (function (_super) {
	__extends(AndGate, _super);
    function AndGate(pPosition) {
		_super.call(this);
    }
    
	AndGate.prototype.draw = function (context) {      
		context.save();
		context.beginPath();
		context.arc(0, 10, 95, Math.PI, 0, false);
        context.lineTo(95, 70);
        context.lineTo(-95, 70);
        
        context.closePath();
        
        context.fillStyle = 'white';
        context.fill();
        
		context.lineWidth = 3;
		context.stroke();
        context.restore();
        
        context.save();
        context.moveTo(0, -85);
        context.lineTo(0, -100);
        context.moveTo(0, 70);
        context.lineTo(0, 100);
        context.lineWidth = 3;
        context.stroke();
        context.restore();
		
        this.drawChildren(context);
    };
	
    return AndGate;
})(FaultTreeGate);
