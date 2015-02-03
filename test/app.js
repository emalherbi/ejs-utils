test('Util.cmc7.validate', function () {
    var input = Util.cmc7.validate('341003630010000055200005306998'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
// test('Util.cmc7.validate', function () {
//     var input = Util.cmc7.validate('341003630010000055200005306997'),
//         expected = true;
//
//     equal(input, expected, 'This should work with no problem.');
// });
test('Util.cnpj.validate', function () {
    var input = Util.cnpj.validate('62173620000180'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.cnpj.validate - with Mask', function () {
    var input = Util.cnpj.validate('621.736.200/001-80'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.cpf.validate', function () {
    var input = Util.cpf.validate('29727693172'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.cpf.validate - with Mask', function () {
    var input = Util.cpf.validate('297.276.931-72'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.nowBr - BR Format', function () {
    var input = Util.date.nowBr(),
        expected = '02/02/2015';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.nowSql - SQL Format', function () {
    var input = Util.date.nowSql(),
        expected = '2015-02-02';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.money.formatBr', function () {
    var input = Util.money.formatBr(100.12),
        expected = "100,12";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.money.formatUs', function () {
    var input = Util.money.formatUs('100,12'),
        expected = 100.12;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.number.only', function () {
    var input = Util.number.only('100^%u&.12'),
        expected = 10012;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.string.addLeft', function () {
    var input = Util.string.addLeft('1', '5'),
        expected = "00001";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.string.trim', function () {
    var input = Util.string.trim(' 100^%u&.12    '),
        expected = '100^%u&.12';

    equal(input, expected, 'This should work with no problem.');
});