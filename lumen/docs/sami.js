
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Console_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Contracts" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Contracts_DrivingRouteService" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Contracts/DrivingRouteService.html">DrivingRouteService</a>                    </div>                </li>                            <li data-name="class:App_Contracts_RouteRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Contracts/RouteRepository.html">RouteRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Events" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Events.html">Events</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Events_Event" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Events/Event.html">Event</a>                    </div>                </li>                            <li data-name="class:App_Events_ExampleEvent" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Events/ExampleEvent.html">ExampleEvent</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleController.html">ExampleController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_RouteController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/RouteController.html">RouteController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_Authenticate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Authenticate.html">Authenticate</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_ExampleMiddleware" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/ExampleMiddleware.html">ExampleMiddleware</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Jobs" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Jobs.html">Jobs</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Jobs_CalculateShortestDrivingPathOfRoute" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Jobs/CalculateShortestDrivingPathOfRoute.html">CalculateShortestDrivingPathOfRoute</a>                    </div>                </li>                            <li data-name="class:App_Jobs_ExampleJob" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Jobs/ExampleJob.html">ExampleJob</a>                    </div>                </li>                            <li data-name="class:App_Jobs_Job" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Jobs/Job.html">Job</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Listeners" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Listeners.html">Listeners</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Listeners_ExampleListener" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Listeners/ExampleListener.html">ExampleListener</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Models" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Models_Model" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/Model.html">Model</a>                    </div>                </li>                            <li data-name="class:App_Models_Route" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/Route.html">Route</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_AuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Repositories" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Repositories.html">Repositories</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Repositories_RouteRepositoryViaSql" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repositories/RouteRepositoryViaSql.html">RouteRepositoryViaSql</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Services" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Services.html">Services</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Services_DrivingRouteServiceViaGoogleMapsApi" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Services/DrivingRouteServiceViaGoogleMapsApi.html">DrivingRouteServiceViaGoogleMapsApi</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_User" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Console.html", "name": "App\\Console", "doc": "Namespace App\\Console"},{"type": "Namespace", "link": "App/Contracts.html", "name": "App\\Contracts", "doc": "Namespace App\\Contracts"},{"type": "Namespace", "link": "App/Events.html", "name": "App\\Events", "doc": "Namespace App\\Events"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Jobs.html", "name": "App\\Jobs", "doc": "Namespace App\\Jobs"},{"type": "Namespace", "link": "App/Listeners.html", "name": "App\\Listeners", "doc": "Namespace App\\Listeners"},{"type": "Namespace", "link": "App/Models.html", "name": "App\\Models", "doc": "Namespace App\\Models"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},{"type": "Namespace", "link": "App/Repositories.html", "name": "App\\Repositories", "doc": "Namespace App\\Repositories"},{"type": "Namespace", "link": "App/Services.html", "name": "App\\Services", "doc": "Namespace App\\Services"},
            {"type": "Interface", "fromName": "App\\Contracts", "fromLink": "App/Contracts.html", "link": "App/Contracts/DrivingRouteService.html", "name": "App\\Contracts\\DrivingRouteService", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Contracts\\DrivingRouteService", "fromLink": "App/Contracts/DrivingRouteService.html", "link": "App/Contracts/DrivingRouteService.html#method_optimizeForDistance", "name": "App\\Contracts\\DrivingRouteService::optimizeForDistance", "doc": "&quot;Calculate the order at which the given locations should be driven for the route to be the shortest possible.&quot;"},
            
            {"type": "Interface", "fromName": "App\\Contracts", "fromLink": "App/Contracts.html", "link": "App/Contracts/RouteRepository.html", "name": "App\\Contracts\\RouteRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Contracts\\RouteRepository", "fromLink": "App/Contracts/RouteRepository.html", "link": "App/Contracts/RouteRepository.html#method_create", "name": "App\\Contracts\\RouteRepository::create", "doc": "&quot;Save a new route into the repository.&quot;"},
                    {"type": "Method", "fromName": "App\\Contracts\\RouteRepository", "fromLink": "App/Contracts/RouteRepository.html", "link": "App/Contracts/RouteRepository.html#method_update", "name": "App\\Contracts\\RouteRepository::update", "doc": "&quot;Update an existing route in the repository.&quot;"},
                    {"type": "Method", "fromName": "App\\Contracts\\RouteRepository", "fromLink": "App/Contracts/RouteRepository.html", "link": "App/Contracts/RouteRepository.html#method_findByToken", "name": "App\\Contracts\\RouteRepository::findByToken", "doc": "&quot;Retrieve a route by its token.&quot;"},
            
            
            {"type": "Class", "fromName": "App\\Console", "fromLink": "App/Console.html", "link": "App/Console/Kernel.html", "name": "App\\Console\\Kernel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_schedule", "name": "App\\Console\\Kernel::schedule", "doc": "&quot;Define the application&#039;s command schedule.&quot;"},
            
            {"type": "Class", "fromName": "App\\Contracts", "fromLink": "App/Contracts.html", "link": "App/Contracts/DrivingRouteService.html", "name": "App\\Contracts\\DrivingRouteService", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Contracts\\DrivingRouteService", "fromLink": "App/Contracts/DrivingRouteService.html", "link": "App/Contracts/DrivingRouteService.html#method_optimizeForDistance", "name": "App\\Contracts\\DrivingRouteService::optimizeForDistance", "doc": "&quot;Calculate the order at which the given locations should be driven for the route to be the shortest possible.&quot;"},
            
            {"type": "Class", "fromName": "App\\Contracts", "fromLink": "App/Contracts.html", "link": "App/Contracts/RouteRepository.html", "name": "App\\Contracts\\RouteRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Contracts\\RouteRepository", "fromLink": "App/Contracts/RouteRepository.html", "link": "App/Contracts/RouteRepository.html#method_create", "name": "App\\Contracts\\RouteRepository::create", "doc": "&quot;Save a new route into the repository.&quot;"},
                    {"type": "Method", "fromName": "App\\Contracts\\RouteRepository", "fromLink": "App/Contracts/RouteRepository.html", "link": "App/Contracts/RouteRepository.html#method_update", "name": "App\\Contracts\\RouteRepository::update", "doc": "&quot;Update an existing route in the repository.&quot;"},
                    {"type": "Method", "fromName": "App\\Contracts\\RouteRepository", "fromLink": "App/Contracts/RouteRepository.html", "link": "App/Contracts/RouteRepository.html#method_findByToken", "name": "App\\Contracts\\RouteRepository::findByToken", "doc": "&quot;Retrieve a route by its token.&quot;"},
            
            {"type": "Class", "fromName": "App\\Events", "fromLink": "App/Events.html", "link": "App/Events/Event.html", "name": "App\\Events\\Event", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Events", "fromLink": "App/Events.html", "link": "App/Events/ExampleEvent.html", "name": "App\\Events\\ExampleEvent", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Events\\ExampleEvent", "fromLink": "App/Events/ExampleEvent.html", "link": "App/Events/ExampleEvent.html#method___construct", "name": "App\\Events\\ExampleEvent::__construct", "doc": "&quot;Create a new event instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleController.html", "name": "App\\Http\\Controllers\\ExampleController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleController", "fromLink": "App/Http/Controllers/ExampleController.html", "link": "App/Http/Controllers/ExampleController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/RouteController.html", "name": "App\\Http\\Controllers\\RouteController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\RouteController", "fromLink": "App/Http/Controllers/RouteController.html", "link": "App/Http/Controllers/RouteController.html#method___construct", "name": "App\\Http\\Controllers\\RouteController::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\RouteController", "fromLink": "App/Http/Controllers/RouteController.html", "link": "App/Http/Controllers/RouteController.html#method_addRoute", "name": "App\\Http\\Controllers\\RouteController::addRoute", "doc": "&quot;Add a route to the repository and dispatch a background job to process it.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\RouteController", "fromLink": "App/Http/Controllers/RouteController.html", "link": "App/Http/Controllers/RouteController.html#method_getRoute", "name": "App\\Http\\Controllers\\RouteController::getRoute", "doc": "&quot;Retrieve a route from the repository by its token.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Authenticate.html", "name": "App\\Http\\Middleware\\Authenticate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method___construct", "name": "App\\Http\\Middleware\\Authenticate::__construct", "doc": "&quot;Create a new middleware instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method_handle", "name": "App\\Http\\Middleware\\Authenticate::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/ExampleMiddleware.html", "name": "App\\Http\\Middleware\\ExampleMiddleware", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\ExampleMiddleware", "fromLink": "App/Http/Middleware/ExampleMiddleware.html", "link": "App/Http/Middleware/ExampleMiddleware.html#method_handle", "name": "App\\Http\\Middleware\\ExampleMiddleware::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Jobs", "fromLink": "App/Jobs.html", "link": "App/Jobs/CalculateShortestDrivingPathOfRoute.html", "name": "App\\Jobs\\CalculateShortestDrivingPathOfRoute", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Jobs\\CalculateShortestDrivingPathOfRoute", "fromLink": "App/Jobs/CalculateShortestDrivingPathOfRoute.html", "link": "App/Jobs/CalculateShortestDrivingPathOfRoute.html#method___construct", "name": "App\\Jobs\\CalculateShortestDrivingPathOfRoute::__construct", "doc": "&quot;Create a new job instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Jobs\\CalculateShortestDrivingPathOfRoute", "fromLink": "App/Jobs/CalculateShortestDrivingPathOfRoute.html", "link": "App/Jobs/CalculateShortestDrivingPathOfRoute.html#method_handle", "name": "App\\Jobs\\CalculateShortestDrivingPathOfRoute::handle", "doc": "&quot;Execute the job.&quot;"},
                    {"type": "Method", "fromName": "App\\Jobs\\CalculateShortestDrivingPathOfRoute", "fromLink": "App/Jobs/CalculateShortestDrivingPathOfRoute.html", "link": "App/Jobs/CalculateShortestDrivingPathOfRoute.html#method_optimizeRouteUsingService", "name": "App\\Jobs\\CalculateShortestDrivingPathOfRoute::optimizeRouteUsingService", "doc": "&quot;Optimize a route using a route service.&quot;"},
            
            {"type": "Class", "fromName": "App\\Jobs", "fromLink": "App/Jobs.html", "link": "App/Jobs/ExampleJob.html", "name": "App\\Jobs\\ExampleJob", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Jobs\\ExampleJob", "fromLink": "App/Jobs/ExampleJob.html", "link": "App/Jobs/ExampleJob.html#method___construct", "name": "App\\Jobs\\ExampleJob::__construct", "doc": "&quot;Create a new job instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Jobs\\ExampleJob", "fromLink": "App/Jobs/ExampleJob.html", "link": "App/Jobs/ExampleJob.html#method_handle", "name": "App\\Jobs\\ExampleJob::handle", "doc": "&quot;Execute the job.&quot;"},
            
            {"type": "Class", "fromName": "App\\Jobs", "fromLink": "App/Jobs.html", "link": "App/Jobs/Job.html", "name": "App\\Jobs\\Job", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Listeners", "fromLink": "App/Listeners.html", "link": "App/Listeners/ExampleListener.html", "name": "App\\Listeners\\ExampleListener", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Listeners\\ExampleListener", "fromLink": "App/Listeners/ExampleListener.html", "link": "App/Listeners/ExampleListener.html#method___construct", "name": "App\\Listeners\\ExampleListener::__construct", "doc": "&quot;Create the event listener.&quot;"},
                    {"type": "Method", "fromName": "App\\Listeners\\ExampleListener", "fromLink": "App/Listeners/ExampleListener.html", "link": "App/Listeners/ExampleListener.html#method_handle", "name": "App\\Listeners\\ExampleListener::handle", "doc": "&quot;Handle the event.&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/Model.html", "name": "App\\Models\\Model", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\Model", "fromLink": "App/Models/Model.html", "link": "App/Models/Model.html#method_toArray", "name": "App\\Models\\Model::toArray", "doc": "&quot;Convert the model to its array representation.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Model", "fromLink": "App/Models/Model.html", "link": "App/Models/Model.html#method_toJson", "name": "App\\Models\\Model::toJson", "doc": "&quot;Convert the model to its JSON representation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/Route.html", "name": "App\\Models\\Route", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_setToken", "name": "App\\Models\\Route::setToken", "doc": "&quot;Set the token of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_setStatus", "name": "App\\Models\\Route::setStatus", "doc": "&quot;Set the status of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_setPath", "name": "App\\Models\\Route::setPath", "doc": "&quot;Set the path of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_setTotalDistance", "name": "App\\Models\\Route::setTotalDistance", "doc": "&quot;Set the total distance of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_setTotalTime", "name": "App\\Models\\Route::setTotalTime", "doc": "&quot;Set the total time of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_setError", "name": "App\\Models\\Route::setError", "doc": "&quot;Set the last error of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_getToken", "name": "App\\Models\\Route::getToken", "doc": "&quot;Get the token of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_getStatus", "name": "App\\Models\\Route::getStatus", "doc": "&quot;Get the status of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_getPath", "name": "App\\Models\\Route::getPath", "doc": "&quot;Get the path of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_getTotalDistance", "name": "App\\Models\\Route::getTotalDistance", "doc": "&quot;Get the total distance of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_getTotalTime", "name": "App\\Models\\Route::getTotalTime", "doc": "&quot;Get the total time of the route.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_getError", "name": "App\\Models\\Route::getError", "doc": "&quot;Get the last calculation error.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\Route", "fromLink": "App/Models/Route.html", "link": "App/Models/Route.html#method_toArray", "name": "App\\Models\\Route::toArray", "doc": "&quot;Convert the route to its array representation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AuthServiceProvider.html", "name": "App\\Providers\\AuthServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_register", "name": "App\\Providers\\AuthServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_boot", "name": "App\\Providers\\AuthServiceProvider::boot", "doc": "&quot;Boot the authentication services for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Repositories", "fromLink": "App/Repositories.html", "link": "App/Repositories/RouteRepositoryViaSql.html", "name": "App\\Repositories\\RouteRepositoryViaSql", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\RouteRepositoryViaSql", "fromLink": "App/Repositories/RouteRepositoryViaSql.html", "link": "App/Repositories/RouteRepositoryViaSql.html#method_query", "name": "App\\Repositories\\RouteRepositoryViaSql::query", "doc": "&quot;Begin a new query on the model table.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\RouteRepositoryViaSql", "fromLink": "App/Repositories/RouteRepositoryViaSql.html", "link": "App/Repositories/RouteRepositoryViaSql.html#method_create", "name": "App\\Repositories\\RouteRepositoryViaSql::create", "doc": "&quot;Save a new route into the repository.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\RouteRepositoryViaSql", "fromLink": "App/Repositories/RouteRepositoryViaSql.html", "link": "App/Repositories/RouteRepositoryViaSql.html#method_update", "name": "App\\Repositories\\RouteRepositoryViaSql::update", "doc": "&quot;Update an existing route in the repository.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\RouteRepositoryViaSql", "fromLink": "App/Repositories/RouteRepositoryViaSql.html", "link": "App/Repositories/RouteRepositoryViaSql.html#method_findByToken", "name": "App\\Repositories\\RouteRepositoryViaSql::findByToken", "doc": "&quot;Retrieve a route by its token.&quot;"},
            
            {"type": "Class", "fromName": "App\\Services", "fromLink": "App/Services.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method___construct", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method_optimizeForDistance", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::optimizeForDistance", "doc": "&quot;Calculate the order at which the given locations should be driven for the route to be the shortest possible.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method_calculateMatrix", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::calculateMatrix", "doc": "&quot;Calculate all distances and times between multiple locations.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method_calculateRouteCost", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::calculateRouteCost", "doc": "&quot;Calculate total cost of a route according to a given matrix, assuming waipoints are visited in order.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method_makeLocation", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::makeLocation", "doc": "&quot;Create a location instance from its coordinate or name representation.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method_makeMultipleLocations", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::makeMultipleLocations", "doc": "&quot;Create multiple location instances from their coordinate or name representation.&quot;"},
                    {"type": "Method", "fromName": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi", "fromLink": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html", "link": "App/Services/DrivingRouteServiceViaGoogleMapsApi.html#method_permutations", "name": "App\\Services\\DrivingRouteServiceViaGoogleMapsApi::permutations", "doc": "&quot;Helper function to generate all possible permutations of an array.&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/User.html", "name": "App\\User", "doc": "&quot;&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


