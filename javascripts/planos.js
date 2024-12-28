$(document).ready(function() {
    // Ajuste de visibilidade de planos com base no dropdown para "mensal" ou "trimestral"
    $('#opcPlan').change(function() {
        if ($(this).prop('checked')) {
            $('#plano-opc2').removeClass('d-none'); // Mostra o plano trimestral
            $('#plano-opc1').addClass('d-none');    // Esconde o plano mensal
        } else {
            $('#plano-opc2').addClass('d-none');    // Esconde o plano trimestral
            $('#plano-opc1').removeClass('d-none'); // Mostra o plano mensal
        }
    });

    // Animação de fixação usando ScrollMagic (apenas para telas maiores)
    if (jQuery(window).width() > 991 && $('#trigger').length > 0) {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
                triggerElement: "#trigger",
                triggerHook: 0,
            })
            .setPin("#pin")
            .setClassToggle(".anchor_section", "stopped")
            .addTo(controller);
    }
});