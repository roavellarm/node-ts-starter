var data = $.parseXML("\
<root>  <field>      <label>Have you invested before</label>      <value>No</value>  </field>  <field>      <label>Are you looking to invest in the next 6 months</label>      <value>Maybe</value>  </field>  <field>      <label>What investments are you interested in</label>      <value>Carbon Credits, Green Investments</value>  </field>  <field>      <label>How much are you looking to invest</label>      <value>£50,000 -  £100,000</value>  </field></root>\
                      '
)
// query the document to get the list element an store it for later use
var list = $('dl');
// data is a xml document now, so we query it...
$(data)
  // and search for all <field> elements
  .find('field')
  // now we can play with each <field>
  .each(function(index, element){
    // as example we query & store the field
    var field = $(element)
    // get the values we want
    var label = field.find('label').text()
    var value = field.find('value').text()
    // and append some html in the <dl> element we stored previously
    list
      .append('<dt>'+label+': </dt>')
      .append('<dd>'+value+'</dd>')
    ;
  })
;