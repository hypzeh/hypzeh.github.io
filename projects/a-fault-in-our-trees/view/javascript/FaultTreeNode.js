var FaultTreeNode = (function () {
    function FaultTreeNode() {
        this.setId(FaultTreeNode.sTotalNodes++);
    }
	FaultTreeNode.sTotalNodes = 0;
    FaultTreeNode.prototype.getId = function () {
        return this.mId;
    };
    FaultTreeNode.prototype.setId = function (pId) {
        this.mId = pId;
    };
	FaultTreeNode.prototype.draw = function (context) {
		
    };
	
    FaultTreeNode.prototype.childWidth = function (context) {
		var width;
        return width;
    };
	
    return FaultTreeNode;
})();
