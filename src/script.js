    $(document).ready(function() {

    $.get('template.hbs', function(template) {

        const compiledTemplate = Handlebars.compile(template);

        const consent1 = { text: 'Text 1', isGlobalContent: true };
        const consent2 = { text: 'Text 2', isLocalContent: true };

        const usersHtml = compiledTemplate({consent1: consent1, consent2: consent2});
        $('#handleBarsContent').html(usersHtml);

        var checkbox1 = $('#checkbox1'), checkbox2 = $('#checkbox2'), checkbox2Container = $('#checkbox2-container'), myButton = $('#my-button');
        checkbox2Container.show();

        checkbox1.change(function() {
        if (checkbox1.prop('checked')) {
          checkbox2Container.hide();
          myButton.prop('disabled', false);
        } else {
          checkbox2Container.show();
          checkbox2.prop('checked', false);
          myButton.prop('disabled', true);
        }
        });

        checkbox2.change(function() {
        if (checkbox2.prop('checked')) {
        checkbox1.prop('checked', true);
          myButton.prop('disabled', false);
        } else {
          myButton.prop('disabled', true);
          checkbox1.prop('checked', false);
        }
        });

        myButton.click(function() {
            alert('Order confirmed!');
            checkbox1.prop('checked', false);
            checkbox2.prop('checked', false);
            checkbox2Container.show();
            myButton.prop('disabled', true);
        });

    });

  });