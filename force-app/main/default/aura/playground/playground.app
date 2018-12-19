<aura:application extends="force:slds">
<aura:attribute name="counter" type="Integer" default="0"/>
<aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
Counter : {!v.counter}
<div class="slds-page-header">LWC Playground App</div>
<c:page standalone="true"/>
</aura:application>	
