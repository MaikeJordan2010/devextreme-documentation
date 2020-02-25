$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'blue' },
        valueIndicator: {
            type: 'rangeBar',
            color: 'dodgerblue'
        },
        tooltip: { enabled: true },
        value: 56
    });

    $('#enableTooltipCheckbox').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            tooltip: {
                enabled: this.checked
            }
        });
        $('#replySpan').html('tooltip | enabled: ' + gauge.option('tooltip.enabled'));
    });
})