public with sharing class AccountController {
     @AuraEnabled(cacheable=true)
     public static List<Account> getAccounts() {
         return [select id, name from account order by Id desc limit 5];
     }
}
