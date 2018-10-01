// helper.js
exports.baseUrl = process.env.baseUrl || 'http://localhost:4200';
const EC = protractor.ExpectedConditions;
const Data = require('./data-test/data_test.js');
const basePath = process.env.basePath || '/';

const Helper = function() {};
Helper.prototype.visit = function() {
	browser.get(basePath);
};

Helper.prototype.visitCompany = function() {
	browser.get('/?empresas=1');
};

Helper.prototype.waitElementVisibility = function(element) {
	browser.wait(EC.visibilityOf(element), 50000);
};

Helper.prototype.validaMsg = function(element, msg){
	expect(element.getText()).toEqual(Data.mensagens[msg]);
};

Helper.prototype.validaTxt = function(element, msg){
	if (expect(element.getText()).toEqual(msg)) {
		return true;
	} else {
		return false;
	}
};

module.exports = Helper;
