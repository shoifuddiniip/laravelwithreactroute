<x-volt-app title="Sample React Component">
    <div id="reactContainer"></div>

    @push('script')
        <script src="{{asset('js/app.js')}}" defer></script>
    @endpush
</x-volt-app>