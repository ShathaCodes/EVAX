import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  OpenTelemetryInterceptorModule,
  OtelColExporterModule,
  CompositePropagatorModule,
  ZipkinExporterModule,
} from '@jufab/opentelemetry-angular-interceptor';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfilComponent } from './profil/profil.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    OpenTelemetryInterceptorModule.forRoot({
      commonConfig: {
        console: true, 
        production: false, // Send Trace with BatchSpanProcessor (true) or SimpleSpanProcessor (false)
        serviceName: 'evax-frontend', // Service name send in trace
        probabilitySampler: '1',
      },
      otelcolConfig: {
        url: 'http://localhost:4318/v1/traces', // URL of opentelemetry collector
      },
      zipkinConfig: {
        url: 'http://localhost:9411'
      },
      
    }),
    //Insert OtelCol exporter module
    OtelColExporterModule,
    ZipkinExporterModule,
    //Insert propagator module
    CompositePropagatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
